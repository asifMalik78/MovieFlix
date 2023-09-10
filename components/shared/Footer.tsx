const Footer = () => {
  return (
    <footer className="w-full p-10 mt-16 bg-black">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        <h1 className="text-2xl font-bold cursor-pointer">
          Movie <span className="text-primary">Flix</span>
        </h1>

        <ul className="flex items-center justify-start gap-12 p-0 font-normal uppercase md:gap-6">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyJJREFUSEvtll2Ip2MYxn+XkNlQWNqWKROiMUMz5TNTU3PAgQOFLaEUG7s7OHA0PibMkvJR2hhlTjiQJUniQEqxhHzsLkeMnaxE1DbbMj4Wl67p+Y/3/87710zKzMHeR+/7vPdzX8993dd9P69YIdMK4XII+H9jfnVTbbsf+A2YkXSwEy22jwTOBnZL+vPf6OuYse1u4GZgA3BGCfILcD/wmKTfW4FtnwncDVwJdAE/A28DD0t6q+kAjcC2TwbeB07pcOoPgMskzdq+HHgZOByYA74EzoH5jsn7iKTEarNFwLaPB94FziqeXwGvA4PAxSVgPiWTW4GPgKOAR4FxSXMlxlPA1cA+4AJJ01XkJuBJ4JbiNClpc4XSC4FXgbVl7SfgaGBC0ng1sO1jgF1AD/C8pGs6Ats+Afim1CmbBiX9VQt4OvAhcFxZ/wLoaxKd7ehjOxCh9UhK7Hlry9j2ncAD5dsNkp5pqrHtUWBbRXCnSfqu7ms7df8WOKkI8o5FwDWn1GW9pLRQmxW/z4EouWVTkjZ2OOSDwBgwLanVHf9kbHsA+KRsXlSTSp1Ty/uKaNJS64CU43xJHzccdLgIMT5drTZcoLq0RYQT2yrpnoYgvcBO4AggopsFnit+0cSAJNc0kXmwt6z1SwpbbRlnWKQFYo31tf0OcAmwJ+0WQdnOoBgq+0YlPVEDPgz4tRx2g6QX68BVYQ1J2lELcCMwVdaukPRKnm33lbYJQAZGr6Sva3tngFOBuySl5m0Z3wY8XjZcKumNSl0jpE9Lm+2Q1Mpw3sX2I0BLsWFguEq57f3AscC9kqKPNuAR4M0CtqBS2ycC7wHp31B2rqT07oLZznzeXXyyngk2UQ51Udmf16skvVQHXgN8D2TixF4DPku9i3KztkXSk1XQCivnASlPbqjYC8APwLVl2CTrbkkH2oDL6a4Hnm0K3DT26n62bwKe7rD/IUnp53lrmtWb0k5ALotYWiaiGpP0R4egVdqvAzLvM8Nblil3e7Xuna7FrEetSArdy7LKD0FurUysH+sBVvevz7LSXaLzoYyXSNR/d1sxqv8GZR4hLvTmwoAAAAAASUVORK5CYII=" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA0BJREFUSEvNll3In3MYxz8fbysvRdG8DWmIYgwnZBbOTFtLUbKxmgNnXqIW8pIoxIlygIcp5WBoZieUsCIzpInEgRgpRd7OuPR9up917959/+/n7+TZr/79D373dX2v63t9r+t3yQIdFwiXAxu4qk4AlgIHjzD0D/CN+tMYk4MZV9XxwGPA1cAxY446978CbwJ3DQXRC1xVAXsFOKJx+BfwKZCMJp3DgOXAouajP4Hr1O1do/2Aq+pw4FsgGc8AzwC71DHQWd9VdQhwGfBA8/8jcIb6dxu8DzgG9yVj9fopKQ7wjYDq5qp6B1iZINT7x4B/AE5KxurP0wA3oJsbm5ub8nwG7FFPHgRuBBVFfqWe3QdaVQlqNXBJmAU+AF6LiKpqHfBiY7dBnamqP4AjgePUX+Z87kN1VUUYu4Adauq0z6mqW4DHgaM6V78Dt6nPV9VNoRrYre6squjldOBcdfcQcMDeSyuoq9rOq+qOBjQgTwGfAIcC5wW0ySrgudt7qurzgIYhNezMnm7GVwFvNdStnfuoqi4AdgKh6kJ1T8f5KU0gYWK5+kXLNjVeFoWrO8aAt6jXtowfBO4FblefHKj93cCjwD3qwy3bMJPAV6jvDwFfCbzdk/EbQKhfpWYi7XeqKgxtya8TdDQT7axU3x0CTs+l97ap17Sifr1R8mp165TAKdFFwBVqfPfWeA54q5qWmT1VlYGSwXKn+sQA8CYgFG9SH2nZfhxdAJerEe5E4G7GS9LbQMbe+T3iOrUZFhmXZ7Ufhqqal7guTQ8PtNOtwNNABn9aJpnkUYhi006Z8RvVZzuKj8LPAS5WY9ObcdQXFQ4NkI1AqO4bIFH8c90ytAbIMjU93Qucefo98J162kAtMzLXAGEnL9aHwKt9725VHdSUJ8/kEjXvQC9wNozfmil04nw2ib7gWsKKmqPqlOfo9tPa9yyGrg3Ay+oNkxyP3VVVVJwxPKPG597TB3ws8HWz7mRzeAj4SP13DKhpvblFIHYpR9agM9svU74bWn3WAy+0gP7v6hMX69SXukFPWvZWZDYDmWARyTQn7GxLB7SHxkSqe9phMdC7FEyI5Mux7eXAXuin4Xi+3y5Yxv8B0cNdLjCgKqcAAAAASUVORK5CYII=" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAh1JREFUSEvtlk2oTlEUhp83BpIul0L5i5KUGGBy/eQnkjIQyUC5KQOFFGUgBgaUkhCZmviXkWSiMJCYyJAJJSkTKf/1amnf23c/3zlnH+fmm9xduzM4a69nr3evvdYWXRrqEpcR8H9TvrHUtscDF4E+YAbwDTgDnJT0JSKxPSW+kj4MRDYEbHsscAnYJelXVfi2pwGPgdkdbN8BV4EFQI+kZa027eAtwC3gDrCtCm77LrCxYoOvgA2hhqSHRRHvA86ln0+BHZJed3JsewnwrEoV4A0wFdgs6V4ReCUwuCvgO3AMOC/payvE9n7gbAb4YwrgfpnUY4DPwOg2h5Ekt4ErwAtJ720fBY5ngE9JOtxu91dW296TsrTM5ycg5swM8BFJJ0rBtvuBhcAiYE2G0xyTfkmXq8DrgSFnkeO5wqZP0pMqcJxtZPGsYQCGiziOXknOOeMV6R5PGgb4dUnbO/npWDJTRToI7AbGNdjAqtaiUXidBn7Y3gtsBRY3AD+XtLRo00URzwdeAqMaRLtW0oNa4DC2vQm4BkTjqDtOSzpUtqi0LdqeDITsq4HlmfRHwDpJP5qAe4BIsgPR2jLAodDOKmj4GYzY9sRUsaKZz0szqldvBjDua5TGCxm2f0za+3FkctTVuZkOfgI3QpXW10XO2qKsjkijwcfLYjowB5gARIuL+TYVmZuSItrao/GbqzYxLRgB/6tytdd1Terf5teaHzDp/AUAAAAASUVORK5CYII=" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAc1JREFUSEvtljFoFFEURc9FQQgGLWyWNBJJOtOkEwsbQ1gxliklhCgEDIGYxuAqMYmFFoqNhViktFKQBAULsRUkqAQRU1lIinTRIsqTt8wMu9+E+bvsuFvsa4aB9++Ze+f9mS/aVGoTly74vyXfOVGb2WHgInAG2E0iOAEMAEdyIvkJfAL86mXABvBS0u/atXWOzWwIeAGcbHHmW8CYpM+pbgh+B5xtMTSVeyVp9B+wmfUB3wuCprIlST/8JnNsZueB1wWDz0l6G4IngKcRYJ+BfuB0RG/YMi7pWQieA+5HiFWAZWASWAF84mNrStKTEHwbuBWhUJF0p7pXzI4Di8A0cChi7YykRyHY3brrvMrAaaOZDQIPgWxqDxCZl1RNtXa4loCFPCpwU5L3ZmVm/nF5AJRz1t+QdLfZqDOwmfUmUV+LjHpWkidT5/g6cC/GcTJUVwB/140M12VJqyH4KvA4AvwcONXkdipLWg/BlwAXLbKGJH0MwT6ZX4qkAj2SftWBk335HhguCL4m6UKqHf6dHPoGONZi+Df/x0va3BecuD4KjAA7yWHAv8mlBh9kG/gK7AEfkoPAn1qNzjn6NOis6fau46aja3Rh26L+C56IgR+mMeYWAAAAAElFTkSuQmCC"/>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
