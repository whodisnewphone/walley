## Features:

- Filter by status, payment type, date/custom date, all can be combined together. Selected filters are highlighted so you're aware of the current criteria
- Transaction list is color coded based on the trasnsaction status, ie green for completed, red for failed, grey for cancelled,etc
- Tapping on a transaction opens up the view with all the data available, including the installments if available, with highlight for the next payment
- Analytics tracker demo if you open up the console


### Tech details:

- used context for easy data management and to avoid prop drilling when sending data from top components to children or to hooks
- used a custom hook for filtering the transactions. since it's a multi level filter, instead of doing multiple array traversals, I'm building up the filter criteria and then traversing the array and selecting the transactions that match. different versions of this were considered
- separated the page component from content since the filters could be reused in some other part, same with the transaction card
- added svg support for icons that should improve the overall ux
- on mobile screens, the payment method type is displayed using an icon(bank transfer, credit/debit card). There's a label that appears next to the icon on larger screens, could be added to the small ones too but wanted to avoid clutter content


### Proposed features to be added:

- Pagination for the transaction list. Display max 10 on a page
- Highlight overdue transactions with ui elements and add a CTA to initiate the payment
- Display information about all the past installments
- Optimize filters display since they occupy a large part of the screen for mobile device now. Use a drawere component, switch to dropdown values, collapsible sections, etc
