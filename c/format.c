#include<stdio.h>

int main(void)
{
    int a = 2; // creates a new int variable, stores the value 2; a will always be int
    // this is equivalent to the following two lines:
    // int a;
    // a = 2;

    // printf can take a literal or a format string + arguments
    printf("%d\n", a); // the first argument must be a format string, then the values to pass into it

    return 0;
}
