import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor DBank{
  stable var currentValue :Float =300;
  let id = 123124342433324;
  currentValue :=100;   
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));
  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));
   public func topUp(amount: Float) {
      currentValue +=amount;
      Debug.print(debug_show(currentValue));
    };
  // topUp();
  //withraw amount funciton 
public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
        currentValue -= amount;
        Debug.print(debug_show(currentValue));
    } else {
        Debug.print("Balance insufficient");
        // You could throw an error or return a status here
    }
};

  public query func checkBalance(): async Float{
    return currentValue;
  };
  public func compund(){
    let currentTime=Time.now();
    let timeElapseddNS= currentTime-startTime;
    let timeElapsed =timeElapseddNS/1000000000;
    currentValue :=currentValue*1.01**Float.fromInt(timeElapsed);
    startTime:=currentTime;
  };
}
