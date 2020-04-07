/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e8c3cd98763035aac7a90c1
*
* You will get 10% discount for each one of your friends
* 
*/
import UserApiGenerated from "./generated/UserApiGenerated";

// Dependencies
import axios from "axios";
import { properties } from "../config/properties";

class UserApi extends UserApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get User List
  static getUserList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/users")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

  /**
   * UserService.login
   *   @description login
   *
   */
  static login(username, password) {
    return axios
      .post(properties.endpoint + "/login", {
        username: username,
        password: password
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  /**
   * UserService.changePassword
   *   @description Change password for logged user
   *   @param string passwordOld old password user
   *   @param string passwordNew new password
   *   @returns object
   *
   */
  static changePassword(passwordNew, passwordOld) {
    return axios
      .post(properties.endpoint + "/changePassword", {
        passwordNew: passwordNew,
        passwordOld: passwordOld
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
   * UserService.changePasswordAdmin
   *   @description Change password of user from admin
   *   @param string passwordAdmin password admin user
   *   @param string passwordNew new password
   *   @returns object
   *
   */
  static changePasswordAdmin(id, passwordAdmin, passwordNew) {
    return axios
      .post(UserApiGenerated.contextUrl + "/" + id + "/changePassword", {
        passwordNew: passwordNew,
        passwordAdmin: passwordAdmin
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default UserApi;