package object;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class ObjectToFileExample {
    public static void main(String[] args) {
        Object person = new Object("Quoc", 25);
        String fileName = "person_data.txt";
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(fileName);
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            objectOutputStream.writeObject(person);

            objectOutputStream.close();
            fileOutputStream.close();

            System.out.println("Đã lưu đối tượng vào tệp " + fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
