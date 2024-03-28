const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Receive data from the client
    const operands = {
      X: req.body.X,
      Y: req.body.Y,
    };

    // Check for division by zero
    if (operands.Y === 0) {
      res.status(400).send('Division by zero is not allowed');
      return; // Exit the function early to avoid unnecessary processing
    }

    // Calculate and prepare the response
    const result = {
      X: operands.X,
      Y: operands.Y,
      result: parseFloat(operands.X) / parseFloat(operands.Y),
    };

    // Send the JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(result));
  } else {
    // If the request
