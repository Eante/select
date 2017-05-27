// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by select.js.
import { name as packageName } from "meteor/eante:select";

// Write your tests here!
// Here is an example.
Tinytest.add('select - example', function (test) {
  test.equal(packageName, "select");
});
