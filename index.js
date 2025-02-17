var Q = require("q");
var _ = require("lodash");
var path = require("path");
var fs = require("fs");
var sass = require("node-sass");

// Compile a SASS file into a css
function renderSASS(input, output) {
  var d = Q.defer();

  sass.render(
    {
      file: input,
    },
    function (e, out) {
      if (e) return d.reject(e);

      fs.writeFileSync(output, out.css);
      d.resolve();
    }
  );

  return d.promise;
}

module.exports = {
  hooks: {
    // Compile sass as CSS
    init: function () {
      var book = this;

      var styles = book.config.get("styles");

      return _.reduce(
        styles,
        function (prev, filename, type) {
          return prev.then(function () {
            var extension = path.extname(filename).toLowerCase();
            if (extension != ".sass" && extension != ".scss") return;

            book.log.info.ln("compile sass file: ", filename);

            // Temporary CSS file
            var tmpfile = type + "-" + Date.now() + ".css";

            // Replace config
            book.config.set("styles." + type, tmpfile);

            return renderSASS(
              book.resolve(filename),
              path.resolve(book.options.output, tmpfile)
            );
          });
        },
        Q()
      );
    },
  },
};
