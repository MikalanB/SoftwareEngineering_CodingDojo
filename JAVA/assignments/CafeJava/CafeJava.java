package assignments.CafeJava;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double coffeePrice = 4.0;
        double lattePrice = 5.5;
        double cappaccinoPrice = 4.5; 
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if (isReadyOrder1) {
            System.out.println(customer1 + "'s order is ready");
        } else {
            System.out.println(customer1 + "'s order is not ready");
        }
        
        //Noah's order 
        if (isReadyOrder4) {
            System.out.println(customer4 + "'s order is ready! Total for the cappachino is: $" + cappaccinoPrice);
        } else {
            System.out.println(customer4 + "'s order is not ready. The total is: $" + cappaccinoPrice);
        }

        // Sam's order
        if (isReadyOrder2) {
            System.out.println(customer2 + "'s order is ready! The total is: $" + (lattePrice * 2));
        } else {
            System.out.println(customer2 + "'s order is not ready. Total is: $" + (lattePrice * 2));
        }

        //Jimmy's order
        System.out.println(customer3 + " owes $"+ (lattePrice - coffeePrice));
    }
}
