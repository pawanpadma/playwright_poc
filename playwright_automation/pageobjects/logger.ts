import { test } from '@playwright/test';
export class Logger {
    private logs: string[] = [];
  
    async log(message: string) {
     // console.log(message);
     // this.logs.push(message);
     await test.step(message, async () => {
        console.log(message);
      });
    }
  
    getLogs() {
      return this.logs.join('\n');
    }
  }


//   export class Logger {
//     private logs: string[] = [];

//     log(message: string) {
//       console.log(message);
//       this.logs.push(message);
//     }

//     getLogs() {
//       return this.logs.join('\n');
//     }
//   }