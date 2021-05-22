func maxProfit(prices []int) int {
    var minPrice = math.Inf(1)
    var maxProfit = 0.0

    for _, v := range prices {
      minPrice = math.Min(minPrice, float64(v))
      maxProfit = math.Max(float64(maxProfit), (float64(v) - minPrice))
    }
    return int(maxProfit)
}