from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="../frontend/dist", static_url_path="")

@app.route("/")
def serve_react():
    return send_from_directory("../frontend/dist", "index.html")

@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory("../frontend/dist", path)

if __name__ == '__main__':
    app.run(debug=True)
