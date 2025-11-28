/**
 * Format a payment type in a usser friendly way
 * @param type - Payment type to format
 * @returns Formatted payment type string
 */
export const formatPaymentType = (type: string): string => {
  switch (type ) {
    case "credit_card": {
      return "Credit card"
    }
    case "debit_card": {
      return "Debit card"
    }
    case "bank_account": {
      return "Bank account"
    }
  }
};
