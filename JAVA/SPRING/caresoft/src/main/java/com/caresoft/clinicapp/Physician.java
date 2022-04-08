
import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {

    public Physician(Integer id, int pin) {
        super(id, pin);
    }

    @Override
    public boolean assignPin(int pin) {
        if (pin <= 1000 && pin >= 9999) {
            return false;
        } else {
            setPin(pin);
            return true;
        }
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        if (id.equals(confirmedAuthID)) {
            System.out.println(id + " equals " + confirmedAuthID);
            return true;
        } else {
            System.out.println(id + " not a match for " + confirmedAuthID);
            return false;
        }
    }

    private ArrayList<String> patientNotes;
	
    // TO DO: Constructor that takes an ID
    // TO DO: Implement HIPAACompliantUser!
	
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

}
