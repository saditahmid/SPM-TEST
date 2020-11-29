#include <iostream>

using namespace std;
int main() 
{
  int n;
  int arr[n];
//   cout << "How many numbers do you want to store?\n";
  cin >> n;

  cout << "Type in the numbers:\n";
  for (int i=0; i<n; i++)
  {
    cin >> arr[i] ;
  }

  cout << "Numbers stored in the array are as follows:\n";
  for (int j=0; j<n; j++)
  {
    cout << arr[j] << endl;
  }
  return 0;
}