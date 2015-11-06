import sys
import os
from phonebook import *

CURRENT_DIR = os.getcwd()

def test_create():
    print "test_create...",

    # Setup
    test_pb = "test.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, test_pb)):
        os.remove(os.path.join(CURRENT_DIR, test_pb))

    # Test
    done = create_pb(test_pb)
    assert done
    assert os.path.exists(os.path.join(CURRENT_DIR, test_pb))

    with open(test_pb, 'r') as f:
        assert f.read() == "Name,Number\n"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, test_pb)):
        os.remove(os.path.join(CURRENT_DIR, test_pb))


def test_create_with_existing():
    print "test_create_with_existing...",

    # Setup
    if os.path.exists(os.path.join(CURRENT_DIR, "existing.pb")):
        os.remove(os.path.join(CURRENT_DIR, "existing.pb"))

    with open("existing.pb", 'w') as existing:
        existing.write("test")

    # Test
    done = create_pb("existing.pb")
    assert not done

    with open("existing.pb", 'r') as existing:
        contents = existing.read()
        assert contents == "test"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, "existing.pb")):
        os.remove(os.path.join(CURRENT_DIR, "existing.pb"))


def test_add():
    pass

def test_lookup():
    pass

def test_reverse_lookup():
    pass

def test_change():
    pass

def test_remove():
    pass


if __name__ == "__main__":

    test_create_with_existing()
    test_create()
