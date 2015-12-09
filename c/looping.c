#include<stdio.h>

int main(void)
{
    int a[100]; // creates an empty array of length 100 that will store ints
    int i;
    for (i=0; i<100; i++)
    {
        a[i] = 300 + 2 * i;
    }
    printf("%d\n", a[5]);
    return 0;
}
