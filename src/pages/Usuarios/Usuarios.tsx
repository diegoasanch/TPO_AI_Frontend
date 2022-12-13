import { Link } from 'react-router-dom'
import { api } from '../../api/api'
import { useApi } from '../../api/useApi'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { LoadingContent } from '../../components/LoadingContent/LoadingContent'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { UsuariosTable } from '../../components/UsuariosTable/UsuariosTable'
import { routes } from '../../routes/routes'

export const UsuariosPage = () => {
  const usuarios = useApi({ key: 'personas', fetcher: api.personas.getAll })

  return (
    <PageLayout
      title="Usuarios"
      rightAddon={
        <Link to={routes.usuariosCreate.path}>
          <ActionButton variant={ActionButtonVariant.create} />
        </Link>
      }
    >
      {usuarios.loading && <LoadingContent title="Buscando usuarios..." />}
      {usuarios.data && !usuarios.loading && !usuarios.errorMessage && (
        <UsuariosTable usuarios={usuarios.data} />
      )}
      {usuarios.errorMessage && !usuarios.loading && (
        <ErrorBox
          title={usuarios.errorType}
          message={usuarios.errorMessage}
          onRetry={usuarios.refetch}
        />
      )}
    </PageLayout>
  )
}
