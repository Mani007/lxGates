from flask import Flask,jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():
    return "<h1>Hello, World!!!</h1>"

@app.route("/vasco100")
def vasco():
    conn = sqlite3.connect('../datasets/vascodb.db')
    cursor = conn.cursor()
    cursor.execute("SELECT C12,time from vascodb LIMIT 100;") # 100 for 1-2 days data and 1000 for 3-4 weeks data
    rows = cursor.fetchall()
    row_list = []
    for row in rows:
        row_list.append({
            "values": row[0],
            "timestamp": row[1],
            
        })
    return jsonify(rows)

if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True)