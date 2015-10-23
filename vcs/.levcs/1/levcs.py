import sys
import shutil
import os

CURRENT_DIR = os.getcwd()
BACKUP_DIR = os.path.join(CURRENT_DIR, ".levcs")

def make_backup():
    print BACKUP_DIR

    if not os.path.isdir(BACKUP_DIR):
        version = 1
    else:
        version = get_next_version()

    next_version_dir = os.path.join(BACKUP_DIR, str(version))

    shutil.copytree(CURRENT_DIR, next_version_dir, ignore=shutil.ignore_patterns('.levcs*'))
    print "Backed up to", next_version_dir

def get_next_version():
    return get_latest_version() + 1

def get_latest_version():
    return len(os.listdir(BACKUP_DIR))


def print_help():
    print "RTFM"


if __name__ == "__main__":

    if len(sys.argv) == 1:
        print_help()

    elif sys.argv[1] == "backup":
        make_backup()
