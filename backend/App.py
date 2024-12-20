from flask import Flask,jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():
    return "<h1>Hello, World!!!</h1>"

@app.route("/vasco")
def vasco():
    conn = sqlite3.connect('../datasets/vascodb.db')
    cursor = conn.cursor()
    cursor.execute("SELECT C12,time from vascodb LIMIT 100;")
    rows = cursor.fetchall()
    return jsonify(rows)

if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True)