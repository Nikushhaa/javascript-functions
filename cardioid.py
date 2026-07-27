from PIL import Image, ImageDraw
import math

# Image
W, H = 800, 800
img = Image.new("RGB", (W, H), "white")
draw = ImageDraw.Draw(img)

cx = W // 2
cy = H // 2

R = 220        # main radius
r = 90         # secondary radius
steps = 360

points = []

for i in range(steps + 1):
    t = math.radians(i)

    x = cx + (R + r * math.cos(20 * t)) * math.cos(t)
    y = cy + (R + r * math.cos(20 * t)) * math.sin(t)

    points.append((x, y))

# Connect consecutive points
for i in range(len(points) - 1):
    draw.line([points[i], points[i + 1]], fill="red", width=1)

img.save("shape.png")