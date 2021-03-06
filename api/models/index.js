var user = require("./User");
var shift = require("./Shift");
var work = require("./Work");
var image = require("./Image");
var face = require("./Face");
var tface = require("./TFace");
var report = require("./Report");
/**
 *
 */
const { byTracking, atTracking } = require("@itoa/list-plugins");

const { Keystone } = require("@itoa/keystone");
const { PasswordAuthStrategy } = require("@itoa/auth-password");
const Extension = require("../Extension");

/**
 * Models làm biến đổi tham chiếu keystonejs
 */
class Models extends Extension {
  /**
   *
   * @param {Keystone} keystone
   * @returns {Keystone}
   */

  createAuth() {
    this.authStrategy = this.keystone.createAuthStrategy({
      type: PasswordAuthStrategy,
      list: "User",
      config: {
        identityField: "phone", // default: 'email'
        secretField: "password", // default: 'password'
      },
    });
  }
  createList() {
    /**
     * DEFAULT PLUGIN
     */
    const at = atTracking({ format: "hh:mm dd/MM/yyyy" });
    const by = byTracking();
    /**
     * USER
     */
    this.keystone.createList("Shift", { ...shift, plugins: [at, by] });
    this.keystone.createList("Work", { ...work, plugins: [at, by] });
    this.keystone.createList("Image", { ...image, plugins: [at, by] });
    this.keystone.createList("Face", { ...face, plugins: [at, by] });
    this.keystone.createList("TFace", { ...tface, plugins: [at, by] });
    this.keystone.createList("Report", { ...report, plugins: [at, by] });
    this.keystone.createList("User", user);
  }
}
module.exports = { Models };
