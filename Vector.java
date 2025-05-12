
public class Particle{
    public static class Particle2d{

        public double radius , angVel, theta, xC , yC; 

        public Particle2d(double radius, double Vel, int xC, int yC){

            this.radius = radius;
            
            this.angVel = Vel/radius;

            this.xC = xC;

            this.yC = yC;

            this.theta = 0;
        }

        public void update(double deltaTime){
            
            theta += angVel * deltaTime; 

        }

        public double[] position(){

            double x = xC + radius * Math.cos(theta);

            double y = yC + radius * Math.sin(theta);

            return new double[] {x,y};

        }
    }   
}