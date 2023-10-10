#include <iostream>
#include <string>
#include <boost/asio.hpp>
#include <boost/beast.hpp>
#include <boost/beast/http.hpp>
#include <boost/beast/version.hpp>
#include <boost/filesystem.hpp>
#include <nlohmann/json.hpp>

namespace asio = boost::asio;
namespace beast = boost::beast;
namespace http = beast::http;
namespace fs = boost::filesystem;
using json = nlohmann::json;

int main() {
    asio::io_context io_context;

    // Create and bind an acceptor
    asio::ip::tcp::acceptor acceptor(io_context, asio::ip::tcp::endpoint(asio::ip::tcp::v4(), 8080));

    while (true) {
        // Accept a connection
        asio::ip::tcp::socket socket(io_context);
        acceptor.accept(socket);

        // Read HTTP request
        beast::flat_buffer buffer;
        http::request<http::string_body> req;
        http::read(socket, buffer, req);

        // Handle GET request to /getFile
        if (req.method() == http::verb::get && req.target() == "/getFile") {
            // Replace this with the actual path to your file
            std::string filePath = "/path/to/your/file.txt";

            if (fs::exists(filePath) && fs::is_regular_file(filePath)) {
                // Read the file content
                std::ifstream file(filePath);
                std::string fileContent((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());

                // Create JSON response
                json response;
                response["Message"] = fileContent;

                // Send HTTP response
                http::response<http::string_body> res{http::status::ok, req.version()};
                res.set(http::field::content_type, "application/json");
                res.keep_alive(req.keep_alive());
                res.body() = response.dump();
                res.prepare_payload();
                http::write(socket, res);
            } else {
                // File not found
                http::response<http::string_body> res{http::status::not_found, req.version()};
                res.set(http::field::content_type, "text/plain");
                res.keep_alive(req.keep_alive());
                res.body() = "File not found";
                res.prepare_payload();
                http::write(socket, res);
            }
        } else {
            // Unsupported or incorrect request
            http::response<http::string_body> res{http::status::bad_request, req.version()};
            res.set(http::field::content_type, "text/plain");
            res.keep_alive(req.keep_alive());
            res.body() = "Invalid request";
            res.prepare_payload();
            http::write(socket, res);
        }
    }

    return 0;
}
