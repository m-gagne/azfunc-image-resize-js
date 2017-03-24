var jimp = require('jimp');

module.exports = function (context, original) {
  jimp.read(original, function(err, image) {
    if (err) {
      console.log(err);
      throw err;
    }
    
    // Resize image
    var maxWidth = parseInt(process.env.ImageResizeMaxWidth);
    image.scaleToFit(maxWidth, jimp.AUTO);

    image.getBuffer(jimp.AUTO, function(err, buffer) {
      // Assign buffer to out binding (blob storage)
      context.bindings.resized = buffer;

      // Close context (end function)
      context.done();
    });
  });
}