# FEM-DD.pdf Description

This image consists of two main plots, labeled (a) and (b), comparing simulation data or models.

**Plot (a):**
- A line plot displaying `\mu` [MPa] on the x-axis against normalized height `z/H` on the y-axis.
- The data is represented by a black solid line labeled `\mu(z)` with red dots labeled "data".
- The value of `\mu` is highest at the bottom (`z/H = 0`), starting around 3.0 MPa, and unevenly decreases towards the top, reaching approximately 0.5 MPa at `z/H = 1.0`.

**Plot (b):**
- Contains three side-by-side subplots, each showing normalized displacement `u/u_0` on the x-axis versus normalized height `z/H` on the y-axis for three different normalized time steps: `t/T=0.3`, `t/T=1.7`, and `t/T=2.5`.
- Each subplot compares a Finite Element Method (FEM) model, shown as a solid red line, with a Data-Driven (DD) model, shown as black dots.
- Across all three time steps, the black dots (DD) align very closely with the red solid line (FEM), indicating an excellent agreement between the two methods for predicting displacement profiles.
