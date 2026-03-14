import os
from flask import Flask, render_template, session, request, url_for, redirect, g

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

dummy_login = {"loginid": "xyz123",
               "password": "12345"}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # print(request.form.to_dict())
        lid = request.form.get("loginId")
        password = request.form.get("password")

        # TODO: check database for loginID, fetch the password (hashed if possible)
        if dummy_login['loginid'] == lid and dummy_login['password'] == password:
            session['logged_in'] = True
            return redirect(url_for("home"))
        else:
            print("login failed")
            session['logged_in'] = False
            return render_template("login.html", login_failed = True)
    return render_template("login.html", login_failed= False)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    # validation logic here
    # TODO: compare loginId and email with database, if similar found, redirect user to login.
    # TODO: if new user, store credentials to database.
    return render_template("signup.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8888)