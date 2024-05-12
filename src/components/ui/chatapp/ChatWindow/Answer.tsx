import { FC } from 'react';

interface AnswerProps {
	ans: any;
}

const Answer: FC<AnswerProps> = ({ ans }) => {
	return (
		<div className="w-full my-4 flex flex-col">
			<div className="flex items-center">
				<span className="flex justify-center items-center rounded-xl translate-y-4">
					<svg
						width="40"
						height="40"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<rect
							x="0.67749"
							y="0.128906"
							width="37.1613"
							height="37.1613"
							rx="9.29032"
							fill="url(#pattern0_2210_2446)"
						/>
						<defs>
							<pattern
								id="pattern0_2210_2446"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_2210_2446"
									transform="scale(0.00444444)"
								/>
							</pattern>
							<image
								id="image0_2210_2446"
								width="225"
								height="225"
								xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAgAElEQVR4nO2de1wU5/X/z+7ssgsrMtzKtSJoQBOFGDAqEbRV6wUv+RoRtSakCUljLy9sorZNQ2IkzfdbNa282tS00fyCmgii1gveGtMEiCACGtBEICCSLLeyurPgXobZ2f39MQQRdmZnll2Yhef9lzKzM4/y2ec5zznnOUditVphGGnT627rNN91371xp/VbPaEhDe2kQUOROnPPcA4DwQcfmUeAXBGs8ApQeE1Q4dP8Q3/o7TfRJyBE5TOcw5AMg0brtR0l6vqS9lsnO5oIUg9SGQAAJgMAkEhwidTVA0AMBcJqAUYktBkAwGLGFapVQZFJwVFJ4dHRvkGuHoALNVrTqT76TVV2YxX0GEEqA0yGSzEXvQsxzBAWGmgzWMzg4Zk1KX7NQ/GxgeEuepfzNaolDQe+Kv1L/ZVmYzfS5ViA0WuEp/dvoh9Pf+QJXOHp3Oc7U6Ntet3e6s+zb34BUhkuVzjrsQh3gaBIsJizps7dFDffiTarczRKkMbtl0/lNFSCXIkmzjEOYaGBMmVOTtg+e6VT5lQnaHT/9ZKMyrNoWUf0hzEA9iUse3560hAfNSSN1nSqnyvOr+rSgEyOtueIARBWC5ip+PEBHySnDWVH5bhGc65e3HztAnh4InUiOCCsFugx7pmxOPOxhY49wRGNEqRx5bl/lmjb0cYIwROCIpN8g08tfdEBC1WwRms61XHn/wlWK7I+EYIgLDRIJNVLXhS67gvTaLG6ft6F93GFSuDwEIheCFJftPiF5PBo/h8RoNG82vL1l44igSKGCEHqDz+xZt2UWTzv57vdybl6EQkU4RRwhWr9paM5Vy/yvJ+XRvdfL9l87QISKMJZ4ArV5msX9l8v4XOzfY0WNlZnXDmFBIpwLrhClXHl1JG6Crt32tFoTad6xWcHkUARrgBXqNK+OFLTqea+jWvPRJBG3/y3kY8J4VIIq0W79vccflOueXTluX+6YEgIxINYrQsL/85xnVWjOVcvlmjb0SSKcDW4FKvq0nBs821rtKZTvfnaBRTqRAwPuFyx+doFNsPUtkafK84HDydnUyMQXHh4Plecb/OKDY0eqauo6tKgbCbEcIJLpFVdGpuuqIFCNNHmtPJTaJVHDD+4XJFWfsrEnD7tx0CNvl1+BgbdhEAME7T57fIzA372gEYJ0phddxlNooiRApcrsusua0lD/x8+oNH3a4qGd0gIhA321RT3/+t9jZpo87YbRWgSRYwsuFyx7UZRf6v0vkY/+rpsJIaEQNigvxrva3Rv/RWQyUdiPAjEg8jke+uv9P2tV6P12g7kE0WIBMZXWq/tYP7aK8qTDdd6C9khEGIAk51suMb8sVej22pLUfoIQjzgUuztusvMn6UA0KTTQI9xRIeEQAyEIPVNOg0wGi1va+ytW4tAiAeprLytERiNnv+uFhmjCNGByc5/VwuMRk92NCFjFCE2cCl2sqMJAKRteh1B6kd6PAiEDQhS36bXSW/rNMgYRYgUqey2TiO9Y7w30gNBIFi5Y7wnvXm3DW2YECIFk9282yZtMehGeiAIBCstBp20ofsuSCQjPRIEwhYSSauhW9pl7kGpJAhxgkuk7aReakCnlxAixkCbpe09ppEeBgLBSnuPSaqnqZEeBgLBip6mkCWKEDvIMyqM+42yB4FyHlwE0qgdekXJ9MGWyuLHB0wbHzBBhQOAt1wBAN0U2UWZiB7T53damvXa3sAyJgOJBDlMnALSKCu9LdoxWXrI5GUTHn70BxOifYPsfqpe23G14/bxpusFnc2EmURtVIeOBD/4xkiPQXQQFAkAmVGPpj2UMCd0kmMPMdHmax3N//jqi9xvb6B21EMBafQBCIoEmXzPI8k/j5uvdFIag5Y07Ksp3najCM2pjoE02gvTdX3PjMVOVOcDzyeNf676d/bXJaDwQnaqIJBGexsDp0+Ytid5rQMdVwVRr+3Y8J9DVV0aVLOIP5hy9fyRHsNIwmyMTs/bsC1hsdL1ZVr8Pce9+HCirxVOqG8qZR6uft3oYEzPo4SFjvDwLFvxyxCVzzC/uqZTHVf4LsjkaN23y9j9DyIoMsUv9Pa6Vx0TqIY0NOk0TTqN5sFimTyJDQxvXfu7CLmSsNAOfHxMMUbnUYIiU4MnHVmawf8jZa2NX7R8U6FRlxIdLQZiwNUwL3xhQHhScNTM4Ej+/dkJ0jjt+J9bKBMuxe5HsAZkomEyGNtBrLGoUUECbdJp/l7z+e7bNWCmuOXS6/MHAJl855TEjQ/P4TNDa0lDVMFOwmpJ8vaf5R/2A+U4P6XK20PpJfO4R5n0VM9dk/4rouPzOy3NPcbe548xH9aY0yhhoVP8QguXb7J7Z72247XLpwta6xzwwDOerMzJCb9NWGJXqSbazMfbZaLN9XfbK9qb/tV840x7I2DyMeIcGHsatVqMG17n1oSJNv/ui2M5DZVDjA/1+VwzH1vo8ENsoiUNx+ursr8qaTZ2j/qN19jSKEHqq1dmctuL9dqOmMJ3wWp11npKUGSSb/DxpS8EKLyc8sD+FKvrXy4/XUW0g4fnaFXq6PxX2YSgyJ2xC7gFmldbHnNsFy6ROtPgw2Qld9T/78E+BM4iOTy68qlXiha/ECFXMmkGo4+x4sMnrJb4cX65C5/huGf/9ZL0suO4cpwTX2rqMaSHT/lsxS8XTJjqrMcOJmK8/+ZpSSqz+XRr3egLDYyZebTH+EFyGsf1/ddLMq6ccqZAKTLey6d6ZeaHi9J9XbDKD2brzCV1q7cAYwePIsaERgkLnRoaw7HKFzZWZ1w5hStUznkdRRJWy+nkdZVPvcLfV+oUon2D2ta/lhoYMZrW/TGx1pt6jP9a9DN/T9tzZJNOM/v8+yBXKIdcC4Ow0KYe487pPzr1k5897B8qeJy0udPYrTHeq73b1qTTtN4jzBYLLQEvIYkEMqk09aHHLEb9v//b7IoEruFnNPwbuCEsdEpQFEcKferFXMBkQ9wUM8lTqaExOcmpQoOrZa2N527fONvWUKUnbDdrlclTAyYsDo9ZFhXL8+E7Eld5yxWjoync6Nco0OZtjy5gu5hXWz70TDmCIiM8vQ8vSBeUtF/Tqf7g60s5zTeYEykgkeBSDFj8CQWdzQXtjXDlVEpQ1EtTE5dPirP7/K0zl3RT5ChoADvK/aNMfNL6s/+1edVEmz0PZA3FB05QJGCy/Fkr18bM5P+pem3Hy5eOn+m4BXKl0KN5zL8IlysOzvkfPkp99pPcXHWtW8t0FM6j/U9ypobGrIli/UUyDf8cEyhhoaHHmPVw0quzUvibfQRp3H75VG8Ey6EtWt9cu6I4L+n65/mLnuVe/T9clH7j2DtVesJ9Q/yjbR5lJrbMiGl8jsv5Htru4FtIvQOmZ87Vi5uvXXDi+Tsm1nr4iTXrpsziuE1DGgI/znbfqXT0zKOMUfiPmSkrJ8/gM7GVtTYSFCnoN0dYLWCmIjy9z/74aUGmZ7G6fkNJQYvpnrPcWwy4FAOFav2lo1Wd3+1KWsN2W4DCKz9xdVrpcTeV6WjQKEGRYcpxPO2zPo43Cms/yTjG9yUse356Ev9P9ZmeuELlIongCtXuhqpOk/7DRels96yNmXngm8ozd1vdccV377V+KIlFkoOv87REmbdsiZ71h8dT+B/KI0jjH6+c2V1fPjyH6wmKzIx6dM881lham14XmveWcyfy4cGN51GCIuPHBxQsTI/0CRD62Ta9DnqMwOMXRpD6lKCovyalCnrL/uslGZVnAZMNmyZwuSKnoTLS25/t6xqi8smaOje7odLtplJ31ajdaYObb7Qddjv+MAbuyfkbksOj+T+5rLVxfXH+iKR14grV5msXHg+OZLOVX47/SXbdZTYXrGhxy3g9QeoPz3nSYYECo1HuV1BkVszs2+te5S/QNr1u7bl9iefea6ZMuFwhVKCEhSasFkEfGQyuUC37z0ETS21uXOG5ZXK822WcuJ9GCVJftPgFbm+LXe6a9BwbJsJCp4dP2ZG4iufTTLT59dKToXlvFXQ24wqVMJ+81UJQ5CRP79TAiHgvH4Iih6ghgiL/evUi29VfxM4Hys0qd7vZWk+Y7p3+0dM857aaTnW0X7BNP9R/TZyd02jzzx+Zy3NIR+oq0spPAW12wPRkTOoPktP60qNqOtW/unSs5I7aYUMWlyu23SjKiE22mRAY6ROQ5B9e0n3HjZL23WagAECQ+tM/epqPg6lYXZ9w7J24k3uM5h6bN1Dcc5XFPJHHDqmmUz0x7+200uO4FBPqV2Ly9/ITVw/I34sNDC9+MvP0/I0qTO54fh0m+0vVJ2wX0yc9BmZ3KjDvNvMoQZFZU+faFWhfQSXAZIDJJeBguh13XR0NadhSXJD77Q3w8BSsTgsNlGln7IJfP7aQLdawfFKcelJcztWLm6s/deCkMi7FsususwVpfzxhKlSeFfTAkcU9NEpY6JTACXYNxF0V57dVXwSFF6MbwjVtfXZVnN9W86kDAfe+4mf/m/gknyBq5mMLn3kk8Td9XwaBq/PF21/Z/EpH+gSEKce5Ua8O99Ao0OZDi57luG6izT85/W6Jtt2Jhz0GU9hYvaL0GJgpx0xPB/L3fBVeHy5Kf7lT/VxxvrAcQkx29NaXbMvOmtDJOc033MVR6gYaJShyX8IyjgCPljRMP/6XFsrk0nh0wrF3elXiwOIOcHjOkw77ImIDwyufeuVIXUXaldNgpnj9MyWS3PbGD1kuTvcLhVtfuoujVOx7JsJqSfIN5giRE6SxV6Cu/B/XkIYqbZsDpidBkVmTE4w/fWOIzjIAWBsz0/r0jp3T5vHxT+ESKfQYm3Qam1cdOMcygohdo0Aa/vbEUxzXV577p6sFCgAYgNDOvwSpT/ELvbX6lR2JqzjysPJqy3dVnOf/2K0zl7Su/V1qYARB6u34/KWyrzQtNq8Eq3zA4jY9OEW91hMWOjVsCsfRyq0lR0u07a5Y4h12CADvIGpZa+Ovy05UdWkAYFtt6enEp3jmbYWofI4szbj/cfaga6Ou0/YTxuF8XiQSxD2PUqbXEpawXSxrbdwtssM6zOK+L2EZdxBVQxqe/SQ38dx7VQYdLlcwgdMVxXnJJ3Lq7QVp+5gTOqnyqVcOz3kSzJTtpR+T3THpbX5WiclAruT5ohFHvBolLHSSfzjHJJpalOfSXbwgCAtNkPotkXHGZ7I5rGcTbd5VcT7w4Ou5bQ0Doqa4XFHSpYk5tmtzUb6Wd93ddVNmGZ/JzpqcQJD6wUrt4gh7Dvmg9rAhXo0Cbf7V1ES2i/uvl7RwxzOHEYIik8YH1K3esitpDYfpWdhYHXL4rW03inDlOJsGNC7FcOW4nOYbfh9n779ewvPtSky2I3HVrTW/TfELJcgHJk6Cs6n20FNYhgcRa9RiXjl5BtvFjGv/FsMqz4QrTyevK34yk+MIf02nOvlEzoriPACwO2xcioFMnlF5NvzwH4vV9TxHEukTULh8U9HiF/oHUXEP2wu6iTaD1eouIXuRjpKpfsM2J+XVltuulTCMMKbnnrgF2o3bufc6xer6uJN7BO3tcIkUlyv0NDXvwvvLC/eyuZAGkxwerV7/h30JywiKBNo8nsPodJ/sJ5FqFGgzx5njv9deBtf3qWGDsFoI0730kMl3N2TxOaOSHB7duj4rPXyKfW/RIHCF6szd1qijf3q99CRbVuhgnp+epN3wenr4lAhvP5s3aFn2UuJErBoFmBkcafPnbXpdyR31SK1TBEUmeftXr9osqBpeiMrnw0XppUtf6s0QFaJUXIrhClV2Q6XnR28eqavg+ymF54eL0n/68BybVzsN3XaPIYgHMWqUsFpAJmc7P3T2Vs3w///SAGC1EhaaMT05vA0cW3L73iJ2cCkGEkla6fGEY+/UdKp5forNWPq2646gt48sYtQoACR5+7NdKmm/JejMsWNYwTrgJ1kPJ1mfyeYwPQnSuLko3+/g69zOI25vEQeMkVpl0MWdynn2k9w2vY7/ZwdwpeP2MPwfOgtRatRqneUfxnbxokY9/Ak7AQov7szA/ddLfD/ekdN8g4/ziMNbZBdcIsUVqty2htAj/ycoiNqfs20NyD86VMJVtoN1WtIgHrcoQ7G63vfQ9ozKsyCTM1+ePueR76HtHM6jPm+Rj8xDaMo9k/m/7UaR5EBWYWO1oM9qSUNVl8ZdHE8gUo3S5iAvb5tXTMN1yIFPvL5Jp1leuHfehfcBYMBBUGZdBgC7zqPk8Ojb615lvEWCjVS5ApdiTBCVv5F6Sf2NoLeMOKLUKMA4FsdeN2fgZNhgDoJGHf3Tmbut3PnOPJ1HjLcoM2KaUCMVmCBq9524k3t4GqkTxvu7UdITiFajbNwxjvxCn1db7vnRm9kNlbhCxccy7u88yqstZ71N4blnXlrd6i1J4wMEL/0SKa4cxxipHK9giA0Mz5+7VqgdPIKIVKMGlvOcqhGNf5a1NiYce2d92QlcijlwDg6XYuvLTiQce6estZHttmjfoOInM08nr4PvA63CXiFXrC87kXwihyCNHHeujZmZNXWuu/R1EKlG2db0QBY7dRhgapAw2XQOP4RxHiWee2/tuX0cty2fFKfduJ1nyv3gV5R0aSIL/sQdQd2RuCrC09st0kpEqtF7IvuKa0hDQUut0BokNmGcRwUttXYb3zMp9+khk4UGUZlO41HHuSZsADi14Bno4ZpuRYIoNYrJ1PqBDeIZQlQ+IJMP/7ffgbMiduD3NCaIWr0ykwmi8n8841hIPLuXI2k6NjA8c3KC+Ms/iVKjADdZDjkAQIpvCFgHBoFGN8y50PzE1UyyFf8P4spxMYXvcgS93pi9QvxTqRg1ikuxL7vvsl2dF2Q718Td0ZCGtef2cRgAa2NmWp/JFmykWq2LCveyXfRVeO2MWyjyqVSMGgWAFtM9Nlff4onT3Cj3kT8ykBS01AZ+nJ3DXvUOBJ0LBQAAXIpVdWk4ArMbH54z4sm43IhUowBQ1X7b5s9jA8PDvPgeazQPSg1hkEsxoEyi29VKJLhcsbn6U99D2zkinMy50L5MP7tPxeWKjMqzbN/5EJVPevgUMU+lYtUoJitqZQ3ZZfIu9NraZdtm2JW0Zt/jKx3IkRsGGN/WiuK85YVcOx4m049Z+u0/FJP9+SprJb2fPzJXzFOpWDUqkexuYp1IMmKTeS33mOyDry+xXRxK+HEYwOWKM3dbY47v3lpylMMhv3XmEj6zIC7FdteXs02lgkpQDT8i1SgukQJtZnPv+Sq8sqbO5fOLybn15eulJ1lv+D78mOIXKsKgCxNE3d1U7fvxDg6D8tWEJbxmQblyb/XnbBfFXINcpBoFAMBk//jqC7aLL8f/BGizXYMSlyuy6y7bDT8WLt/kWPhxGOjN9LtyamvJUZs38Iy94VLsr7eusV2dF/qQaJd78WoUl2K56lq25QlXeJ5OXsfHt9c//MiRFsSEH/fELSAoUmz+V1widUpZEYLUs31X44MnDv35LkK8GgUAwGSHvi5ju7h8UlxKUBSfFao3/NjZbDd3PfOxhZ0bslKCRW2fDUBAaSq58osW2zvREJWPGOoV2ETUGsWl2LaaTzl2DEeXvhAmV/J0IfHMXQ9QeBUu38S/n92IM/joFQdFHU1sl6aP8xWdMw4ARK5RAAC58o9XzrBdVGKyipW/AjPF/z/Xsdz1UYJEcuZuK9vFWf5hYjNyGMSuUcZpwiGmEJVP3ZObmYPFAh7bL3edTwEw5uwy/+fbx3lP47/W4xIpUCY2ozxchYtz2yR2jQIAeHiu/PQAx/Vo36DOtN+HyZWCjwIrx+W2NfjZCz8CQIDCKzXMkUIjgyGsFoLUp4ZNCeBdQoIbQWs9sJ8JYztDNuK4gUZxibTZ2M3h5gSAAIVXw9rfMqmWwh4uxZjwY/jhP3IfsBQUfmSDoMgIubJ06UtHlmY4/JABCCvnK5Wx5Y9LxXpSVKTDGgAuV2Tf/IJbQ0pM9uGi9NPzNxIW2oHcdT1N8Qw/Hp7zpAOvYD5yeM6Tt9e96ty4jtB5lGCxbbxkHs4YjvNxD40CAK5Qrfj8kN1dzvJJcdq0V7dExhGmew4otS/8yHGGc92UWcafvsG/0AhTPtdZnRsGI7QsupzlJBbbGbIRx200CgAglfEpVIQrPHclrbmV+jtHqoB8H370PJBlt9BI67rX7L6it3PDmt9yd24YCkLn0WCW9mUWUTqewM00CjCXd6fuviog8H1zTv5vYYzUjMqzE/Pe5ig0EqLyYXsF000ZAIoWv1C4fBNbfTWnIHQe9Vba3qt1GLrFWQTKbTRKWC3x4wOEutaTw6O1G7fvS1jmSKk6uaKZMvEpNDLgFYSFBjO1L2GZduN2ni2ih4KweVQmZ/MnsJ0hG3HcRqNgtS4LmezYR5+fnnR3Q5YDaXhMEFVYoRHTvcyIadoNr3N3bnj2k1y750J5wn8eJSx0asAEtqvld1rEWajMfTRKmx8PcjzvwVfhtWdeWvXKTEeqgPQVGjmQxVGllsn0u/v0jj3z0jjm+/3XSzwPZOU2Xxc0BudAmxeHx7BdLOkWaVFS99EoU6jIFvyLcPd2h3e0CgjI5EyVWo5MP47izmWtjRPz3s6oPIvLFSMzY1nMP54w1eaVJp0GzJQ4i+mJcUy2sZjZEiU/+rrs2U9yuavH9MfhKiB9VWoTz70nqEptm17HlDlpdnHjXQ4IqyUeD2bbvVW0s+aajDjuo1GpjK3ne3P33Vx1re/HO+yGNPuzdeaSzg1ZjlQBYarUqmtDD2fb7U3DVNgLzXuroLPZKWVOBsN3z2Smtjwyl+3i0VvV4tzUgztplP1/sIsyASbjc6JyAAEKL8eqgBAUGT8+oHrVZu5t+5G6Cs+P3syuu8yzwp5j8NkzEVYLYDK2CIKJNhe01om2nb37aJTdgOvr5tZ3ojL5RA7/nkb3q4B879TkoK9pWOVTr3B0bqjpVCcceyet9DjjauU5EhdipvbN+AnbxVMN18TcZsR9NMrOgG5uTOG4qKN/4g5pDmBtzEzjhtezYmazBVEJC02Y7u2cNq9t/WscnRu0pOHZT3LjTuUMscKec8HlCg5f2IFvKkW70IM7adRMsQlucACaZ0hzAL0RzvVZTBWQvp8z2XTpIZNb12dtnbmEI6SZc/Wi36E3BverdSl27VHCdK9oMWuaVU2n+kzHLdEu9CDy/vUPwF4e+wcs3ZdxKQZSLKPybPZXJYeT03hmG/V1h19fnN9s7AaA+PEBf12Qzv3xwsbqp8v+RVAkd+nx4YegyKyHkzjMkrcqz4u8T7j7aBSg7R5h03Uy1S8EaDOwzARMSDPx3HupoTE5yalszoEBzAmddHvdq8wczLFKAkC9tiOjKK/kjhpXqEZkcefYMxEWOjV4EkfXnppOdUFLrXharNvEfTQqlbXrdTY1yubb7wOXSEGhKuhsLjjyf1kxs1+dlcIzBYlbnQRp3H75VE5DJciVgqdP158cIix0vArnTqb+1aVj4KTjAK7DfexRgK/v2D4vFu0XDJjMfj0IKcaUhBDUeJON+03DhPuVCIqM9w1x1lkRtlek+IVWPvUKxz15teUl2nZxxpb6I/bx3QeTXWc506jEZKmBETxnJuZcqNDGm/0pVtczIc2+pmH8YVL4GNeVA6/m+xZSnxn1aOHyTZz3GNeXnRCP54EDt9EoLsWOtjawXV0TFSfoTKNjjTebdJq15/bNu/C+ztwzoGmYXZhs/J3T5lmf3sHd714o/ff1zFsOP7Fmz7w07k+tPPdPMfub+uM2GgWAFtM9Ns/8yskzhD7tfuPNvLfsNt7saxrGhDQFvajPddW58c2tM5cIHaddmD0To84Uv9DWda/ZPZHyeunJEm27mP1N/XEnjQLAf769afPnSkyWFTPbgcpvjCd1240ijiDqkboKz493OBbSZA6CVq/M/HBROrcBylbO1y5WsAJNJY0PKF36UuHyTXYdF0fqKrJvfuEWqzyDe8z2vcjk2V+VsO21N8XNz667zOaB4qYviJp0/fO/PfFUnzexplP9XHF+VZcGlytA4C+VoEjAZPmJq9fGzORz/zd32rgDkp6Y3PbPZR51T22N9g3i85bCxuq0knyRO5sG4E4axSXSZr22Xtth8/cRovLJipmdXXfZ4RmCCaLGFb4bPz4gysvniu6/zcZukMmFPpCw0ECZsqbO5e/kAoC/VH/GbSD6K23bGEpMxl+gKz4/5F4CBbdb60Gu/HsNa6HXofduY/xTVQZdQWezIxsjpgZJYETrutcEHQTdWnK0oL2Ry5CgzeOGtjrvv16y4rODYguD8cHNNMqUZubYiZ9a8AwM+ZwQLpEKtjutlv41SHhGs+B7T9buhiq7s/XD/qGChtSfzUX5GZVn3W4GZXAzjQIAYLI/VbJuw2MDw/fNWjXMTYX7DoIKqkFSr+1YXri3z5Nl526aesg/xIGxNek0Ccfeybn1pRttkgbgTvYoAy7Fchoqf5uwhG2uen56UnP33aEYpvxhTM8t0bP+8HgK/3PVJtr8dvmZ7Jtf8A+ihql8HYhL7ao4v63mU5Ar3Veg4I4aBQCQKzOLCzgi0TsSV9XqOgvaG136uyFIfUpQ1J+fWM1zy8KQV1u+/kohAPA3DQkL/esoYQ7gI3UVP684I8I8LAdwS43iUqygta6wsZojYHNkacbWkqO768td8UsiKDJMOe7g/I2CIkb38/1kcmFRcsq05qF4PjeaaPOphmsvX/13i+keLle49fTZh1tqFADAw3NFcZ42PJpjhd2VtCY+8IfrLx0FudJZMRVmcd8zY3HmYwv5f6pNr8ssLihorQMPTwd0E6Hy5UgAZShrbcz/pjKn+QbQ5lGjTgYJfvCNkR6DgxAWOml8QPGTmdy3Nek06Z99VKJtFzx7DXodUKbMyQlvzF7BcYh+AL2m59cl4OHp2PeEoEiOQMCRuooD31SeaW8ETA6YDCQS8ecxCcWNNQoABHisB/IAAAkFSURBVEVmRj1qN38CAAobq39VcabZ2A2YTJBWCKsFrFagTKmhMW/NXiHI9DxSV5FWfoqZ2Ph/avAArE/vYLsqOZAFzImD0YvbrvUAAIDLFTm3vgzz8rGbq7F8UtzySXGFjdXv3Sw903ELpDJusfZKkzYDJsuMmPaL2PmC1NlneuJyhWPh2d5hUCRTVcUmxer6IX4B3AL31igAMO1sPDAZHwORUaqWNFxoun686fond9QERYLF/ECg3GIGuTLCwzM1LHpFZOzjIVGC6oa26XW/Lz2R++0Nx0zP/hAWOiVwAse2bOeXn7pLft1QcO+1vg+C1GdNnctxcIcNLWkgTIbuHhNBGuRSTCVXeHsoQ8bhDtSzNdHmv1692OuPdMbiS1jou2m/Z7N967UdMcd3jwLXkl1GybcQV6iy6y7X6jqF9kLwVXjx3wBxUNhYvaL0GJgpZ4mGIPWlS1/iGNtrl0+L/Dynsxg9e0BcrijobJ6Y9zZH0wVXwJQkWVGcx1Qsc8ozmVx6jrBqWWujmKvfOBdMuXr+SI/BaSgl0g6a+tuNYl+Qzg6JcvXrtKRh02cfv3TldJuFxlmSOx2AMN3bN2vVM48kctyTdOY9nUSiFGVJW6czqjQKAEqJRCnzONH6TeGt6ul40A+9/Vz0ol0V5xd+8kG1oQuXK5yoFcJ0Lz8p7emH53C/+mhrvRO/FSJntGmUQYnJmijT/rrL//n25pTxga5QakxA6OWWhm8NXc7qFkJYaKVEWp7yC7Yytgw1neqnig/jHm7TcnfojE6NwvcTaj1p2P9N5Yd1V7ytEIkHesqcNvd4yeQ/mzLb1won1DdNUkw5tAiWiTRsmZxwZtmLYeNwjjtNtDn8X3/GZaPcITqAUeJ74oawWsBMAU0lBfwwfdJjM4Mjo/2C+cx/Jtps9zYtaXjz8uneaiUujmAln8gp6dKMka1SH2NCo330ihUAMFm8Cp8bEB7p7R/k5T1OrgQAg7mH6aV516Qv6mi6RHSoMPn11b/h45xq0+sOfV22rba07/lsSuofwdoSGffCtCSeEaxnP8nNVdeO+qjSYMaWRvvoPfPElDYZXDwCkwEALsUICx0mV95Y/TL//OWaTvVn39Ve6rjde2SPph6o7itXJo0PWBEWMzfsIUFdQzcX5bt1Lv1QGKMa5Q9hoSM8PMtW/JL/EaX+mGiz1qRn2nH7KlVCe6AxrD23z9X52mIGadQ+jIVQujjDuf2S+aAlDYsK91bpibFmg/Zn1O7rnYhSIlFisndry4YnNNBHYWP1o4V/bzP3jGWBwmiKhboaXKHaXP1pwrF3hiHWaqLNm4vyV3x+yIHSfKMPNI8KgAkN/O16kcVknPGDCKXzvK39yastn3Fmb3mXxrkRLPcF2aOOQFhooM07p83LiE12StoUDDou55Rnjg6QRh2kvwf+N3E/mhEU4XBQtKZTfbD28u6GKvi+OhqiP0ijQ4WZUwGTpQZGrI6c/ljQxAnj/e3qtUmn+UrTclFdm/vdTabCHrI72UAadQ73o0cAYDFHqHzn+4fhHsrxcqW3XOGByQDgjknfRZmuattLujRAmeyeqUIwjJI8/BEHl0hBAt8fr1PozD25bSyV0SUSXIrBGDjj4SyQRl0FmiCdBfKPIsSOVDVm0rkR7ogKk0uDPcbE2UKEmxLsoZR6jYEiAgj3xQuTSYMVqqEUkEcgXAdhtQQrVNJQL+9h6K+KQDiC1Rrq5S0N83IkdReBGB7CvHykvc3fEQgRQpun+oVI/T3dsh8KYozg7zlOOtEnACxoHkWIEot5ok+ANETlMxbqAyLcEVyhClH5SAFgVVCkAx2LEQiXQljoVUGRwMTrl/xwCto2IUQHbV7ywynAaHRWyCRkkiJEh8U8K2QSMBqN9AmAsVSHDeEeeHhG+gRAX27ezimJyCRFiAfCQu+c0lsluFejqybPQCYpQkTQ5lWTe1uk9mo02jcowtMbJZcgxABhtcSPD+grJ3g/Dz/rkaTeuoQIxMhipjZFP973t/sa/SlnDXYEYjjpr8b7GlVisp3T5hEUORJDQiB6IShy57R5/QsUPHDmLiM2ediHhEA8iMU8QIcPaNRX4ZUVMxs5oRAjBWGhs6bOHVBCa+DZ5VdnpQzjkBCIgQxW4ECNKjFZ/qyVyCpFDD8ERebPWjm4VJaNGhBrY2bGjw9AvlLEcEJY6PjxAWtjZg6+ZLtOycc/3gg9RhePCoHoB2X6+McbbV6xrdFo36B9j6MVHzFMEBS5Z8Zitj5VrPWenp+elBI4Ae3xEa6GsNBJvsGZjy1ku4GrJtmhRc8CqseOcDUSyamlL3Jc59IorvCsXvIiQeqdPSgEoheC1FcveZG7tZqd2o6xgeFFi19AMkW4AoLUn56/MTYwnPs2+/VHk8Oj9z2+EskU4VwIUr/v8ZXLJ8XZvZNXjdznpyftjF2AZIpwFgSp3xm74PnpSXxullh5FyTLuXpx87UL6DA+YogQpH7PjMUcG/kBCNAoABypq0gryceVqPwOwkEI0738pDSb8SQ2hGkUAMpaGxMvfgioJwFCIIyvvXThs0LbVwvWKABoSEPCv/Y0G7tRUzYETwiKjPD0rvyfzQHCW1c6olGGXRXnt9V8Ch6euAQ1J0GwQlgt0GPcGbtg68wljj3BcY0CQE2n+rni/KouDcjkSKmIARBWC5ip+PEBHySn2XWCcjAkjTLsv16SUXkWtRVE9Idpo7ovYRlPBxMHTtAoAGhJw5uXT+c0VIJciZQ6xiEsNFCmzMkJ22ev5A5y8sQ5GmVo0+v2Vn+effMLkMrQdmoMQlAkWMxZU+duipsfonJanwVnapRBSxoOfFW6q668xXQPGQBjAWZZD1OO2xoz65lHEn2F79y5cb5G+6jpVB+svby7oQosZtQHe5TB6JL5zWbFzF7zUPxQdkXcuFCjfdR0qivamy6o6wo030KPEaQyAIDvj1Yh4Yqc+3nuTNU6ixlXqBb5hy8Oj5kZHOk6afYxHBrtT5ted1unuWO8d/NuW4tB12robif1BtrcaOwezmEg+DDJ09sLkwUrVKFe3mFePlP9Qvw9x030CXCircmH/w/szc9FCUmJqAAAAABJRU5ErkJggg=="
							/>
						</defs>
					</svg>
				</span>
				<span className="ml-4 text-white text-md font-semibold translate-y-2">
					Response
				</span>
			</div>
			<div className="bg-[#28303F] w-full px-14 py-5 text-[#FFFFFF] rounded-3xl">
				{/* {ans.split('\n').map((line: any, index: number) => ( */}
					<div  className='my-2'>{ans}</div>
				{/* ))} */}
			</div>
		</div>
	);
};

export default Answer;
