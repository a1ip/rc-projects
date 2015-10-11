# The Cabalistic Hills
import sys
from collections import defaultdict
from copy import deepcopy

def read_line():
    return sys.stdin.readline().strip()

def print_message(output):
    '''output is a boolean (result of evaluate)'''
    if output == False:
        print "Danger!! Lucifer will trap you"
    else:
        print "Go on get the Magical Lamp"


def explore(bridge_dict, location, lamp, N):
    print ""
    print "LOCATION: ", location
    print "LAMP: ", lamp
    print "BRIDGES: ", bridge_dict

    if location == N :
        print "GOT THE LAMP!"
        lamp = True

    if location == 1 and lamp == True:
        print "AT 1 and GOT THE LAMP",
        if len(bridge_dict.keys()) == 0:
            print "and NO BRIDGES LEFT"
            print "*** EPIC WIN! ***"
            return True
        else:
            print "but BRIDGES LEFT"

    print "BRIDGES FROM HERE: ", bridge_dict[location]
    for next_loc in bridge_dict[location]:
        print "STEPPING DOWN TO ", next_loc
        # copy dict and remove the next bridge to be traversed
        new_dict = deepcopy(bridge_dict)
        new_dict[location].remove(next_loc)

        # remove hill from dict if it has no bridges left
        if len(new_dict[location]) == 0:
            del new_dict[location]

        # try to reach the end from here
        if explore(new_dict, next_loc, lamp, N):
            print "STEPPED UP FROM ", next_loc
            return True

    # if we got through the for loop without finding a path:
    print "--- FAILED :( ---"
    return False



def main():
    T = int(sys.stdin.readline().strip())

    print "T = ", T

    for i in range(T):
        print "####### Test case ", i
        [N, M] = [int(x) for x in read_line().split()]
        print N, " hills, ", M, " bridges"

        # Bridge
        # {hills: [lists with one entry for each reachable hill (duplicates OK)]}
        bridge_dict = defaultdict(list)

        for b in range(M):
            [start, end] = [int(x) for x in read_line().split()]
            print "\t", start, " -> ", end
            bridge_dict[start].append(end)

        print bridge_dict

        print ""

        is_it_a_trap = explore(bridge_dict, 1, False, N)
        print_message(is_it_a_trap)

        print ""


if __name__ == "__main__":

    main()
