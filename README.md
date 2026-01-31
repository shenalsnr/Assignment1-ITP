"# Assignment1-ITP(IT23818866)

IT3040 - IT Project Management Assignment 1 

Project Description:

This project focuses on the automated functional and UI testing of the Swift Translator system. The objective is to evaluate how accurately the system converts Singlish input into Sinhala output and to analyze the stability and usability of the user interface.

The automation suite is built using Playwright and covers 35 unique test scenarios:
24 Positive Scenarios: Validating correct transliterations of simple, compound, and complex sentences.
10 Negative Scenarios: Identifying cases where the system fails or behaves incorrectly.
1 UI-Related Scenario: Evaluating real-time output updates or input handling.

Prerequisites:

Node.js: Ensure you have Node.js installed on your machine.
npm: Node Package Manager (comes with Node.js).

Installation Instructions ...

1.Clone the Repository:

git clone <your-public-git-link>


2.Navigate to the Project Folder:

cd IT23818866_Assignment_1

3.Install Dependencies:

npm install

4.Install Playwright Browsers:

npx playwright install

Running the Tests ...

Execute all tests in Headless mode:
npx playwright test


Execute tests in Headed mode (Visible Browser):
npx playwright test --headed


View Test Execution Report:
npx playwright show-report



Test Scenarios CoveredThe tests are designed to validate the following as per Appendix 1:Sentence Structures: Simple, Compound, and Complex.Grammatical Variations: Past, Present, and Future tenses.Input Robustness: Short (<= 30 chars), Medium (31-299 chars), and Long (>=300 chars) inputs.Mixed Language: Singlish combined with English technical terms.Formatting: Handling of punctuation, currency, and line breaks.


"