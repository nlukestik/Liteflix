import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { LinearProgress } from "@material-ui/core"
import { isMobile } from "../../utils"
import { ReactComponent as ClipIcon } from '../../statics/clip.svg'

import "./Dropzone.scss"

export default function Dropzone({setImage}) {
  const [progress, setProgress] = useState(0)
  const [onSuccess, setOnSuccess] = useState(false)
  const [onError, setOnError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
	
	const onDrop = useCallback((acceptedFile, rejectedFile) => {
		acceptedFile.forEach((e) => {
			setIsLoading(true)

      const imageReader = new FileReader()

      imageReader.onprogress = (e) =>
				setProgress(Math.round(e.loaded * 100 / e.total))

      imageReader.onerror = () => setOnError(true)

      imageReader.onload = (e) => {
				setImage(e.target.result)
        setIsLoading(false)
        setOnSuccess(true)
      }

      imageReader.readAsDataURL(e)
    })

		rejectedFile.forEach((e) => {
			setOnError(true)
		})
	}, [setImage])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: 'image/*'
	})

	return(
		<div className="root">
			{ isLoading ? (

				<div className="dropzone__loading">
					<p>
						<span>Cargando <b>{progress}%</b></span>
					</p>

					<div className="dropzone__loading__bar">
						<LinearProgress variant="determinate" value={progress} />
					</div>

					<p onClick={() => setIsLoading(false)}>
						<b>Cancelar</b>
					</p>
				</div>

			) : onError ? (

				<div className="dropzone__loading">
					<p>
						<span><b>¡ERROR!</b> No se pudo cargar la película</span>
					</p>

					<div className="dropzone__loading__bar-error">
						<LinearProgress variant="determinate" value={100} />
					</div>

					<p onClick={() => setOnError(false)}>
						<b>Reintentar</b>
					</p>
				</div>

			) : onSuccess ? (

				<div className="dropzone__loading">
					<p>
						<b>100% Cargado</b>
					</p>

					<div className="dropzone__loading__bar-success">
						<LinearProgress variant="determinate" value={100} />
					</div>

					<p style={{color: "#64EEBC", cursor: "default"}}>
						¡Listo!
					</p>
				</div>

			) : (
				<div {...getRootProps({ className: 'dropzone' })}>
					<input {...getInputProps()} />
					<div className="dropzone__helper">
						<ClipIcon />

						{isMobile(600) ? 
							<>Agregá un archivo</>
							: 
							<>
								<b className="pointer">Agregá un archivo</b> o arrastralo y soltalo aquí
							</>
						}
					</div>
				</div>
			)}

		</div>
	)
}