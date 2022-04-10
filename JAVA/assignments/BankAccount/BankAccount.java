

public class BankAccount {
    
    private double checkingBalance = 0;
    private double savingBalance = 0;

    public static int numOfAccounts = 0;

    public static double totalAmount = 0;

    public BankAccount(double checkingBalance, double savingBalance) {
        this.checkingBalance = checkingBalance;
        this.savingBalance = savingBalance;
        numOfAccounts++;
    }

    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingBalance() {
        return this.savingBalance;
    }

    public void setSavingBalance(double savingBalance) {
        this.savingBalance = savingBalance;
    }

    public void deposit(String typeOfAccount, double amount) {
        if (typeOfAccount.toLowerCase() == "checking") {
            checkingBalance += amount;
            totalAmount += amount;
        } else if (typeOfAccount.toLowerCase() == "savings") {
            savingBalance += amount;
            totalAmount += amount;
        }
    }

    public void withdraw(String typeOfAccount, double amount) {
        if (typeOfAccount.toLowerCase() == "checking" && checkingBalance != 0) {
            checkingBalance -= amount;
            totalAmount -= amount;
        } else if (typeOfAccount.toLowerCase() == "savings" && savingBalance != 0) {
            savingBalance -= amount;
            totalAmount -= amount;
        } else {
            System.out.println("Your balance is too low to withdraw the amount of $" + amount);
        }
    }

    public double displayTotal(String typeOfAccount) {
        if (typeOfAccount.toLowerCase() == "checking") {
            return checkingBalance;
        } else if (typeOfAccount.toLowerCase() == "savings") {
            return savingBalance;
        } else {
            System.out.println("Please specify which account you would like the total of");
            return 0;
        }
    }

}
