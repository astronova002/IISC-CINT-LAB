import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, BookOpen, Award, RefreshCw } from "lucide-react";
import { useRealTimeData } from "@/hooks/use-real-time-data";

interface RealtimeStatsProps {
  className?: string;
}

export function RealtimeStats({ className }: RealtimeStatsProps) {
  const { metrics, isLoading, refreshData } = useRealTimeData();

  const statItems = [
    {
      title: "Publications",
      value: metrics.publications,
      icon: <BookOpen className="h-4 w-4" />,
      color: "text-blue-600",
      trend: "+2 this month"
    },
    {
      title: "Citations",
      value: metrics.citations.toLocaleString(),
      icon: <TrendingUp className="h-4 w-4" />,
      color: "text-green-600",
      trend: "Live Updates"
    },
    {
      title: "H-Index",
      value: metrics.hIndex,
      icon: <Award className="h-4 w-4" />,
      color: "text-purple-600",
      trend: "High Impact"
    },
    {
      title: "Trained Interns",
      value: `${metrics.trainedInterns}+`,
      icon: <Users className="h-4 w-4" />,
      color: "text-orange-600",
      trend: "Active Program"
    }
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Real-time Research Metrics</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={refreshData}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-center space-x-2">
                <span className={item.color}>{item.icon}</span>
                <span>{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{item.value}</div>
              <Badge variant="outline" className="mt-1 text-xs">
                {item.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-500">
          Last updated: {metrics.lastUpdated.toLocaleTimeString()} • Live data from research systems
        </p>
      </div>
    </div>
  );
}