func maxProfit(prices []int) int {
    var low = math.Inf(1)
    var profit = 0.0

    for _, v := range prices {
      p := float64(v)

     if p > low {
       profit = profit + (p - low)
       low = p
       continue
     } 

     low = math.Min(low, p)
    } 
    return int(profit)
}