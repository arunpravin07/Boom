
// Program to check for command line arguments
class Sample{
	public static void main(String[] args)
	{
		// check if length of args array is
		// greater than 0
		if (args.length > 0) {
			System.out.println(
				"The text from i/p is ---> ");

			// iterating the args array and printing
			// the command line arguments
			for (String val : args)
				System.out.println(val);
		}
		else
			System.out.println("sorry enter text ");
	}
}
