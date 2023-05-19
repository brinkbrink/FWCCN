exports.validateInput = (req, res, next) => {
    const { lastName, firstName, age, streetAddress, city, zip, phone } = req.body;
  
    //perform validation for each field
    if (!lastName || typeof lastName !== 'string') {
      return res.status(400).json({ error: 'Last name is required and must be a string' });
    }
  
    if (!firstName || typeof firstName !== 'string') {
      return res.status(400).json({ error: 'First name is required and must be a string' });
    }
  
    if (!age || typeof age !== 'number' || age < 0) {
      return res.status(400).json({ error: 'Age is required and must be a positive number' });
    }
  
    if (!streetAddress || typeof streetAddress !== 'string') {
      return res.status(400).json({ error: 'Street address is required and must be a string' });
    }
  
    if (!city || typeof city !== 'string') {
      return res.status(400).json({ error: 'City is required and must be a string' });
    }
  
    if (!zip || typeof zip !== 'string' || zip.length !== 5) {
      return res.status(400).json({ error: 'Zip code is required and must be a 5-digit string' });  
    }
  
    if (!phone || typeof phone !== 'string') {
      return res.status(400).json({ error: 'Phone number is required and must be a string' });
    }
  
    //if all validations pass, proceed to the next middleware
    next();
  };
  
  //check application limits
  exports.checkApplicationLimits = (req, res, next) => {
    
  };
  
  