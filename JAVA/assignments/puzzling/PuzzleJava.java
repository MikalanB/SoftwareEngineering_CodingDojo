
import java.util.Arrays;
import java.util.Random;

public class PuzzleJava {
    
    Random randMachine = new Random();

    public double[] getTenRolls() {
        double[] array = new double[10];
        for (int i = 0; i < array.length; i++) {
            array[i] = randMachine.nextDouble(20);
        }
        System.out.println(Arrays.toString(array));
        return array;
    }

    public String getRandomLetter() {
        String[] array = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};

        return array[randMachine.nextInt(25)];
    }

    public String generatePassword() {
        String[] password = new String[8];

        for (int i = 0; i < password.length; i++) {
            password[i] = getRandomLetter();
        }

        //System.out.println(Arrays.toString(password));
        return Arrays.toString(password);
    }

    public String getNewPassword(int num) {
        String [] newPassword = new String[num];
        
        for (int i = 0; i < num; i++) {
            newPassword[i] = getRandomLetter();
        }

        //System.out.println(Arrays.toString(newPassword));
        return Arrays.toString(newPassword);
    }
}
