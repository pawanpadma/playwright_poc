import { BasePage, expect } from "./base-page";




export class HomePage extends BasePage {

     a =  this.page.locator('div:nth-child(2) > a');
     b =  this.page.getByRole('link', { name: 'Get Quote from 11 Banks' });
     c =  this.page.getByText('Which is Best Bank with');
     d =  this.page.getByRole('link', { name: 'Home Loan', exact: true });
     e =   this.page.getByRole('link', { name: 'Get Quote for Home Loan' });
     f =  this.page.getByRole('button', { name: 'Get Quote' });
     g = this.page.getByText('Enter Loan Amount!');

     public async searchForProduct(loginData) {
   
        const page = this.page;
        const logger = this.logger;
        this.logger.log('action action...'+loginData.userName);
        await this.page.goto("/");
        this.logger.log('Performing action...');
        await this.a.first().click();
        this.logger.log('Performing action...');
        await this.b.click();
        this.logger.log('Performing action...');
      }

    function subtractOneMonth(dateString: string): string {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setMonth(date.getMonth() - 1);

    const newYear = date.getFullYear();
    const newMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const newDay = date.getDate().toString().padStart(2, '0');

    return `${newYear}-${newMonth}-${newDay}`;
}

const releaseDates: { [key: string]: string } = {
    "01": "2025-01-20",
    "02": "2025-02-17",
    "03": "2025-03-17",
    "04": "2025-04-21",
    "05": "2025-05-19",
    "06": "2025-06-23",
    "07": "2025-07-21",
    "08": "2025-08-18",
    "09": "2025-09-22",
    "10": "2025-10-20",
    "11": "2024-11-18",
    "12": "2024-12-16"
};

// Function to get the appropriate release date
function getReleaseDate(): string {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Month is zero-based in JS, so add 1
    const currentDay = today.getDate();
    const formattedMonth = String(currentMonth).padStart(2, '0'); // Format as "01", "02", etc.
    console.log("formattedMonth:", formattedMonth);
    // Get the release date for the current month
    const currentReleaseDate = releaseDates[formattedMonth];
    console.log("currentReleaseDate:", currentReleaseDate);

    if (!currentReleaseDate) {
        throw new Error("Release date not found for the current month.");
    }

    const [year, month, day] = currentReleaseDate.split("-").map(Number);
console.log("currentDay:", currentDay);
console.log("day:", day);


    if (currentDay <= day) {
        // If today's day is less than or equal to the release day, return the current release date
        return currentReleaseDate;
    } else {
        // Otherwise, return the release date for the next month
        const nextMonth = (currentMonth % 12) + 1; // Handle December to January transition
        const formattedNextMonth = String(nextMonth).padStart(2, '0'); // Format as "01", "02", etc.
        const nextReleaseDate = releaseDates[formattedNextMonth];

        if (!nextReleaseDate) {
            throw new Error("Release date not found for the next month.");
        }

        return nextReleaseDate;
    }
}

// Usage
const nextReleaseDate = getReleaseDate();
console.log("Next Release Date:", nextReleaseDate);




}
