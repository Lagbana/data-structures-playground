func maxSubArray(nums []int) int {
    var curMax = float64(nums[0])
    var max = float64(nums[0])
    
    if len(nums) == 1 {
        return nums[0]
    }
	
	for i :=1; i<len(nums); i++{
		v := float64(nums[i])
		
        curMax = math.Max(float64(v + curMax), v)

        max = math.Max(curMax, max)
		
	}
	
	return int(max)
    
}