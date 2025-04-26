For knowledge sharing club - 4/26/25

We experience time linearly, moving forward. Therefore, we collect a lot of time domain (time series) data - but frequently (no pun intended) it's useful to see that from a different perspective - in the frequency domain.
![[Screenshot 2025-04-26 at 1.11.02 PM.png]]
Frequency domain visualization can be really useful for extracting insights from a wave like above. Signals like the above show periodicity, but it may not be apparent exactly what the characteristics of that periodicity are
![[Screenshot 2025-04-26 at 1.11.29 PM.png]]

This is a good visual representation of what we're trying to do:

![[Fourier_transform_time_and_frequency_domains_(small).gif]]

(source: [Wikipedia](https://en.wikipedia.org/wiki/Fourier_transform#/media/File:Fourier_transform_time_and_frequency_domains_(small).gif))

How do we go from time to frequency? This is the question that the fourier transform aims to answer. It's defined below:
$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$
What do each of these terms mean?

- $F(\omega)$ is the frequency domain representation
- $f(t)$ is the time domain representation
- $e^{-i \omega t}$ is the complex exponential that we use to correlate our timeseries signal with

Ok, so this is a start - we have an integral across the entire function where we multiple our signal by this complex exponential - but this just moves our confusion to this complex exponential. Let's try to intuitively understand this.

From school, you may recall Euler's identity:
$$
e^{i\omega t} = \cos(\omega t) + i\sin(\omega t)
$$
so for any given frequency, what we're doing is multiplying our function by a sin and cosine function. Why do we do this? 

![[Circle_cos_sin.gif]]

(source [Wikipedia](https://commons.wikimedia.org/wiki/File:Circle_cos_sin.gif#mw-jump-to-license))

Sin and cosine is that they can be seen as the fundamental periodic functions - when we multiply our function by a sin + cos wave at a certain frequency, we get a complex value that (once we take the magnitude of it), gives us the "power" of the time signal at that frequency. This is the computation that this function describes at a single frequency. 
![[Screenshot 2025-04-26 at 2.07.34 PM.png]]
![[Screenshot 2025-04-26 at 2.09.01 PM.png]]

So how do we use this practically? We can't exactly integrate across infinity for each frequency, can we? This is where the DFT comes in.

The DFT, or Discrete Fourier Transform, is defined below:
$$
F[k] = \sum_{n=0}^{N-1} f[n] e^{-i2\pi kn/N}
$$
This is just a discretization of the standard FT, with $N$ being the sample rate (and length of all arrays):
- $\int$ integral -> $\sum$ summation
- $F(\omega)$ continuous function in frequency domain -> $F[k]$ discrete points in frequency domain
- $f(t)$ continuous function in time domain -> $f[k]$ discrete, sampled points in the time domain
- $e^{-i \omega t}$ continuous complex exponential in time domain -> $e^{-i2\pi kn/N}$ discrete, complex points from a complex exponential

Essentially, this can be understood as a bunch of element wise multiplications, and a sum across all of those - essentially just a dot product

$$
F[k] = x \cdot w_k
$$

Where $w_k$ is the complex exponential vector for a single frequency $k$, and $x$ is the vector representing the points $f[k]$

But what is a series of dot products if not just a matrix equation:

$$
\mathbf{X} = \mathbf{W} \cdot \mathbf{x}
$$
where $X$ is the vector of points representing $F[k]$, and  
$$
\mathbf{W} = \begin{bmatrix} w_0[0] & w_0[1] & w_0[2] & \cdots & w_0[N-1] \\ w_1[0] & w_1[1] & w_1[2] & \cdots & w_1[N-1] \\ w_2[0] & w_2[1] & w_2[2] & \cdots & w_2[N-1] \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ w_{N-1}[0] & w_{N-1}[1] & w_{N-1}[2] & \cdots & w_{N-1}[N-1] \\ \end{bmatrix}
$$

Turns out the DFT is just a simple matrix multiplication! This matrix $W$, is called the Fourier Matrix, and boils down the essence of the Fourier transform into a simple form.
### Future topics
- FFT and the optimization of the DFT
	- Cooley-Tukey Algorithm + symmetries in Fourier Matrix
- Other types of transforms and their uses
	- laplace transform (control systems, periodicity + decay)
	- wavelet transform (analyzing frequencies over time)
	- number theoretic transform (fast integer multiplication)
- Multiplication / Convolution Theorem
- Considerations for using FFT/DFT (artifacts from sampling, usable data, etc)