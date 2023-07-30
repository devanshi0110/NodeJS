const fs = require('fs');
const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink);

// Function to delete a file using the promisified fs.unlink
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log('File deleted successfully!');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
}

// Call the deleteFile function with the file path
deleteFile('./myfile.txt.gz');