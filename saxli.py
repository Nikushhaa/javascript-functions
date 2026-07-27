# suratis sheqmna
from PIL import Image, ImageDraw
import random
import math

# canvasis sigane da simagle
w = 800
h = 500

# axali suratis sheqmna
img = Image.new("RGB", (w, h))
draw = ImageDraw.Draw(img)

# dila tu game
night = False


# cis da balaxis daxatva
def draw_sky():

    # tu game aris
    if night:
        sky = (11, 15, 42)

    # tu dila aris
    else:
        sky = (135, 206, 235)

    # cis daxatva
    draw.rectangle((0, 0, w, h), fill=sky)

    # balaxis daxatva
    draw.rectangle((0, h * 0.76, w, h), fill="green")

    # tu game aris varskvlavebis daxatva
    if night:

        # 80 varskvlavis sheqmna
        for i in range(80):

            # random koordinata
            x = random.randint(0, w)
            y = random.randint(0, 300)

            # random zoma
            r = random.randint(1, 3)

            # varskvlavis daxatva
            draw.ellipse(
                (x-r, y-r, x+r, y+r),
                fill="white"
            )


# mzis sxivebis daxatva
def draw_rays(cx, cy, start, end, color, shift):

    # yvela kutxistvis
    for angle in range(0, 360, 45):

        # radianebshi gadayvana
        a = math.radians(angle + shift)

        # sawyisi wertili
        x1 = cx + math.cos(a) * start
        y1 = cy + math.sin(a) * start

        # bolo wertili
        x2 = cx + math.cos(a) * end
        y2 = cy + math.sin(a) * end

        # sxivis daxatva
        draw.line((x1, y1, x2, y2), fill=color, width=2)


# mzis daxatva
def draw_sun(x, y):

    # mzis wris daxatva
    draw.ellipse(
        (x-40, y-40, x+40, y+40),
        fill="yellow"
    )

    # sxivebis daxatva
    draw_rays(x, y, 50, 70, "orange", 0)
    draw_rays(x, y, 55, 90, "gold", 15)
    draw_rays(x, y, 65, 100, "yellow", 30)


# mtvaris daxatva
def draw_moon(x, y):

    # mtvaris wris daxatva
    draw.ellipse(
        (x-50, y-50, x+50, y+50),
        fill=(245, 243, 206)
    )


# saxlis daxatva
def draw_house(x, y, width, height):

    # kedlebis daxatva
    draw.rectangle(
        (x, y, x + width, y + height),
        fill=(255, 247, 4)
    )

    # saxuravis wertilebi
    roof = [
        (x, y),
        (x + width / 2, y - height / 2),
        (x + width, y)
    ]

    # saxuravis daxatva
    draw.polygon(roof, fill="red")

    # karis daxatva
    draw.rectangle(
        (
            x + width * 0.45,
            y + height * 0.55,
            x + width * 0.65,
            y + height
        ),
        fill=(101, 67, 33)
    )

    # karis saxeluris daxatva
    draw.ellipse(
        (
            x + width * 0.48 - 4,
            y + height * 0.75 - 4,
            x + width * 0.48 + 4,
            y + height * 0.75 + 4
        ),
        fill="white"
    )

    # fanjris koordinata
    wx1 = x + width * 0.1
    wy1 = y + height * 0.3
    wx2 = x + width * 0.3
    wy2 = y + height * 0.55

    # fanjris daxatva
    draw.rectangle(
        (wx1, wy1, wx2, wy2),
        fill="white",
        outline="black"
    )

    # vertikaluri xazi
    draw.line(
        ((wx1 + wx2) / 2, wy1,
         (wx1 + wx2) / 2, wy2),
        fill="black"
    )

    # horizontaluri xazi
    draw.line(
        (wx1, (wy1 + wy2) / 2,
         wx2, (wy1 + wy2) / 2),
        fill="black"
    )


# fonis daxatva
draw_sky()

# tu game aris
if night:

    # mtvaris daxatva
    draw_moon(700, 80)

# tu dila aris
else:

    # ori mzis daxatva
    draw_sun(700, 80)
    draw_sun(100, 80)

# sami saxlis daxatva
draw_house(50, 200, 200, 180)
draw_house(300, 210, 160, 170)
draw_house(560, 180, 200, 200)

# suratis shenaxva
img.save("scene.png")

# suratis gamotana
img.show()