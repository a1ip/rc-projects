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
    existing = "existing.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

    with open(existing, 'w') as pb:
        pb.write("test")

    # Test
    done = create_pb(existing)
    assert not done

    with open(existing, 'r') as pb:
        contents = pb.read()
        assert contents == "test"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

def test_read_phonebook():
    print "test_read_phonebook...",

    # Setup
    existing = "test.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

    with open(existing, 'w') as pb:
        pb.write("Name,Number\nJoe Schmoe,123 456 7890\nSome One,098 765 4321\n")

    # Test
    pb = read_phonebook(existing)
    assert type(pb) is dict
    assert pb["Joe Schmoe"] == "123 456 7890"
    assert pb["Some One"] == "098 765 4321"
    assert "Name" not in pb

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

def test_write_phonebook():
    print "test_write_phonebook...",

    # Setup
    existing = "test.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

    pb_dict = {"Joe Schmoe": "123 456 7890", "Some One": "098 765 4321"}

    # Test
    done = write_phonebook(pb_dict, existing)
    assert done
    assert os.path.exists(os.path.join(CURRENT_DIR, existing))
    with open(existing, 'r') as pb:
        assert pb.read() == "Name,Number\nJoe Schmoe,123 456 7890\nSome One,098 765 4321\n"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

def test_add():
    print "test_add...",

    # Setup
    test_pb = "test.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, test_pb)):
        os.remove(os.path.join(CURRENT_DIR, test_pb))
    create_pb(test_pb)

    # Test
    add("Joe Schmoe","123 456 7890", test_pb)
    add("Some One","098 765 4321", test_pb)
    with open(test_pb, 'r') as pb:
        lines = pb.read().split("\n")
        assert lines[0] == "Name,Number"
        assert lines[1] == "Joe Schmoe,123 456 7890"
        assert lines[2] == "Some One,098 765 4321"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, test_pb)):
        os.remove(os.path.join(CURRENT_DIR, test_pb))

def test_add_with_existing():
    print("test_add_with_existing...")

    # Setup
    existing = "test.pb"
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))

    with open(existing, 'w') as pb:
        pb.write("Name,Number\nJoe Schmoe,123 456 7890\nSome One,098 765 4321\n")

    # Test
    done = add("Joe Schmoe","123 456 7890", existing)
    assert done == False
    with open(existing, 'r') as pb:
        assert pb.read() == "Name,Number\nJoe Schmoe,123 456 7890\nSome One,098 765 4321\n"

    print "OK"

    # Teardown
    if os.path.exists(os.path.join(CURRENT_DIR, existing)):
        os.remove(os.path.join(CURRENT_DIR, existing))


def test_lookup():
    # Setup

    # Test

    # Teardown
    pass

def test_reverse_lookup():
    # Setup

    # Test

    # Teardown
    pass

def test_change():
    # Setup

    # Test

    # Teardown
    pass

def test_remove():
    # Setup

    # Test

    # Teardown
    pass


if __name__ == "__main__":

    test_create_with_existing()
    test_create()
    test_read_phonebook()
    test_write_phonebook()
    test_add()
    test_add_with_existing()
    test_lookup()
    test_reverse_lookup()
    test_change()
    test_remove()
