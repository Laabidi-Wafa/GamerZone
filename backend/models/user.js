const db = require("../util/database");

module.exports = class User {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static find(email) {
    return db.execute("SELECT * FROM user WHERE email = ?", [email]);
  }

  static save(user) {
    return db.execute(
      "INSERT INTO user (name, email, password,role) VALUES (?, ?, ?, ?)",
      [user.name, user.email, user.password, "user"]
    );
  }
};
