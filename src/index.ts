import app from './app.js';
import { parseExpressApp } from 'express-route-parser';

try {
    app.listen(4000, (): void => { 
      console.log('Server is listening on port 4000');
   
      });
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error occured: ${error.message}`);
         }
    }

if (process.env.DEBUG) {
  const parsed = parseExpressApp(app);
  console.log('parsed', parsed);
}



