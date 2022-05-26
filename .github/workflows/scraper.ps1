# First, lets create the date.
$daysAway = [Int] (get-date).DayOfWeek + 1
$saturday = (Get-Date).AddDays(-$daysAway)

$seperator = "%2F"

if([Int] $saturday.Month -lt 10)
{
    $monthNumber = "0" + $saturday.Month
}
else
{
    $monthNumber = $saturday.Month
}

if([Int] $saturday.Day -lt 10)
{
    $dayNumber = "0" + $saturday.Day
}

else
{
    $dayNumber = $saturday.Day
}

$dateString = "$monthNumber$seperator$dayNumber$seperator$([Int] $saturday.Year)"

# Now, lets get the data and parse it.
$uri = "https://vt.ncsbe.gov/RegStat/Results/?date=$dateString"
$html = Invoke-WebRequest -Uri $uri
$data -match "var data = (.*?)]"
$jsonData = $Matches[0] -replace "var data = ", ''
$countyData = ConvertFrom-Json $jsonData
$unionCountryData = $countyData | Where-Object {$_.CountyName -eq "UNION"}
$unionCountryData | ConvertTo-Json | Out-File "../../src/data/unionCountyData.json"

echo $unionCountryData