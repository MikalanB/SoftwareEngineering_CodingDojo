import java.util.ArrayList;

public class CafeUtil {
    
    public int getStreakGoal(int numWeeks) {
        int sum = 0;
        for (int i = 0; i <= numWeeks; i++) {
            sum += i;
        }
        return sum;
    }

    double getOrderTotal(double [] prices) {
        double total = 0;
        for (int i = 0; i <= prices.length -1; i++) {
            total += prices[i];
        }
        return total;
    }

    public void displayMenu (ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println("Menu Item: " +  menuItems.get(i) );
        }
    }

    public void addCustomer (ArrayList<String> customers) {
        System.out.println("Please enter your name: ");

        String userName = System.console().readLine();

        System.out.println("Hello, " + userName + "!");

        System.out.println("There are " + customers.size() + " people in front of you");
        // add customer name
        customers.add(userName);
    }

}
