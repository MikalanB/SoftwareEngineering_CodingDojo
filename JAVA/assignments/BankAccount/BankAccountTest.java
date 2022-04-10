

public class BankAccountTest {
    public static void main(String[] args) {
        BankAccount bankAccount1 = new BankAccount(40, 2);

        bankAccount1.deposit("checking", 200);
        bankAccount1.deposit("savings", 30);

        bankAccount1.withdraw("checking", 30);
        bankAccount1.withdraw("savings", 10);

        System.out.println(bankAccount1.getCheckingBalance());
        System.out.println(bankAccount1.getSavingBalance());
    }
}
