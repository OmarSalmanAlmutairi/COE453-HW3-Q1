const functions = require('@google-cloud/functions-framework');

functions.http('add', (req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Receive data from the client
    const operands = {
      X: req.body.X,
      Y: req.body.Y,
    };

    // Calculate and prepare the response
    const result = {
      X: operands.X,
      Y: operands.Y,
      result: parseFloat(operands.X) + parseFloat(operands.Y),
    };

    // Send the JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(result));
  } else {
    // If the request method is not POST, return an error
    res.status(405).send('Method Not Allowed');
  }
});
