import sys
import os

CURRENT_DIR = os.getcwd()

def create_pb(filename):
    '''Creates phonebook file with the given filename.
    Filename should end in ".pb".
    If the file already exists, does nothing and returns False.
    If the file does not exist, creates an empty file and returns True.'''

    if os.path.exists(os.path.join(CURRENT_DIR, filename)):
        print filename, "already exists. Operation canceled."
        return False

    with open(filename, 'w') as pb:
        pb.write("Name,Number\n")

    return True

def create_with_overwrite(filename):
    if os.path.exists(os.path.join(CURRENT_DIR, filename)):
        overwrite = input(filename + " already exists. Overwrite? (y/n)")
        if not overwrite:
            print "Operation canceled, phonebook not created."
    else:
        create_pb(filename)

def add(name, number, filename):
    pass

def lookup(name, filename):
    pass

def reverse_lookup(number, filename):
    pass

def change(name, new_number, filename):
    pass

def remove(name, filename):
    pass

def describe_usage_and_quit(message = ""):
    if message:
        print(message)
    print("Usage:")
    print("  $ python phonebook.py create my_phonebook.pb")
    quit()

if __name__ == "__main__":

    try:
        command = sys.argv[1]
    except:
        describe_usage_and_quit()

    if command == "create":
        try:
            filename = sys.argv[2]
            assert filename.endswith(".pb")
        except:
            describe_usage_and_quit("Please provide a filename ending in '.pb'.")
        create_pb(filename)

    else:
        describe_usage_and_quit("Not a valid command.")
