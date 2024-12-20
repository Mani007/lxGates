from flask import Flask
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():
    return "<h1>Hello, World!!!</h1>"

if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True)